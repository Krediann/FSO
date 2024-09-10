"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const requestLogger_1 = require("./middleware/requestLogger");
const info_router_1 = require("./modules/info/info.router");
const persons_routes_1 = require("./modules/persons/persons.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://localhost:5173"],
}));
app.use(express_1.default.json());
app.use(requestLogger_1.requestLogger);
app.use("/info", info_router_1.infoRouter);
// Routes
const apiRouter = express_1.default.Router();
apiRouter.use("/persons", persons_routes_1.personsRouter);
app.use("/api", apiRouter);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
