import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { CreateRequestDto } from './dto/create-request.dto';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientService],
    }).compile();

    service = module.get<ClientService>(ClientService);
  });

  it('should return expected response', async () => {
    const mockRequest: CreateRequestDto = {
      channel: {
        id: 37,
        name: 'PN-SUPERAPP',
        sessionId: '12345',
        entryPoint: 'home',
        ipAddress: '10.0.0.1',
        userAgent: 'Mozilla/5.0...',
      },
      client: {
        firstName: 'Nombre',
        secondName: 'Nombre',
        firstSurname: 'Apellido',
        secondSurname: 'Apellido',
        identificationType: '01',
        identificationNumber: '1222333555',
        phoneNumber: '3001234567',
        email: 'davi@davivienda.com',
        userId: '48fa1786-41d4-11ee-be56-0242ac120002',
      },
      accounts: [
        {
          type: 'Cuenta Ahorros',
          number: '123123123',
          state: '00',
          isEmbargoed: false,
          typeHandling: '00',
          productCode: '0550',
          subProductCode: '00',
          balance: 122220,
        },
      ],
    };

    const response = await service.processRequest(mockRequest);

    expect(response).toHaveProperty('clientId', mockRequest.client.userId);
    expect(response).toHaveProperty('url');
    expect(response.token).toMatchObject({
      accessToken: expect.any(String),
      expiresIn: 900,
      tokenType: 'Bearer',
    });
  });
});
