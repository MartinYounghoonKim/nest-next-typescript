import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class ReferenceService {
  async getReferenceList(): Promise<string> {
    const response = await axios.get("http://localhost:8081/api/cs-center/qna");
    return response.data;
  }

  async getReference(id: number): Promise<string> {
    const response = await axios.get(`http://localhost:8081/api/cs-center/qna/${id}`);
    return response.data;
  }
}
