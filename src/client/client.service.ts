import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class ClientService {
  async processRequest(createRequestDto: CreateRequestDto) {
    // Aquí puedes realizar cualquier lógica adicional si es necesario, por ejemplo, consultas a bases de datos.

    // Construir el response según el formato solicitado
    return {
      clientId: createRequestDto.client.userId, // Usamos el userId del cliente
      url: `https://spi-front-integration.dvvapps.io/spi/page_initial?uuid=${this.generateUUID()}`,
      token: {
        accessToken: this.generateAccessToken(),
        expiresIn: 900,
        tokenType: 'Bearer',
      },
    };
  }

  // Métodos auxiliares para generar valores
  private generateUUID(): string {
    return 'b9f7b01a-ba57-4ed8-b039-7abb2ebb71b9'; // Este es un valor de ejemplo
  }

  private generateAccessToken(): string {
    return 'jasSAdasnX'; // Este es un valor de ejemplo
  }
}
