import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const response = await axios.get("http://localhost:8081/api/cs-center/qna");
    return response.data;
  }
}
