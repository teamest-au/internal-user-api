import Something from "@teamest/internal-user-server";
import { Service } from "./src/service";

const service = new Service();
const implementation = new Something("internal-user-server", 3000, service);

implementation.listen();
