import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EventoController } from "../evento.controller";
import { EventoService } from "../evento.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dataEvento: new Date(),
  descricaoEvento: "exampleDescricaoEvento",
  id: "exampleId",
  localEvento: "exampleLocalEvento",
  tituloEvento: "exampleTituloEvento",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dataEvento: new Date(),
  descricaoEvento: "exampleDescricaoEvento",
  id: "exampleId",
  localEvento: "exampleLocalEvento",
  tituloEvento: "exampleTituloEvento",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dataEvento: new Date(),
    descricaoEvento: "exampleDescricaoEvento",
    id: "exampleId",
    localEvento: "exampleLocalEvento",
    tituloEvento: "exampleTituloEvento",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dataEvento: new Date(),
  descricaoEvento: "exampleDescricaoEvento",
  id: "exampleId",
  localEvento: "exampleLocalEvento",
  tituloEvento: "exampleTituloEvento",
  updatedAt: new Date(),
};

const service = {
  createEvento() {
    return CREATE_RESULT;
  },
  eventos: () => FIND_MANY_RESULT,
  evento: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Evento", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EventoService,
          useValue: service,
        },
      ],
      controllers: [EventoController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /eventos", async () => {
    await request(app.getHttpServer())
      .post("/eventos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataEvento: CREATE_RESULT.dataEvento.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /eventos", async () => {
    await request(app.getHttpServer())
      .get("/eventos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dataEvento: FIND_MANY_RESULT[0].dataEvento.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /eventos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/eventos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /eventos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/eventos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dataEvento: FIND_ONE_RESULT.dataEvento.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /eventos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/eventos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataEvento: CREATE_RESULT.dataEvento.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/eventos")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
