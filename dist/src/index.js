"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const client_1 = require("@prisma/client");
const secrets_1 = require("./secrets");
const errors_1 = require("./middlewares/errors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Initializing the prisma client
exports.prismaClient = new client_1.PrismaClient({
    log: ['warn', 'error'],
});
console.log('Prisma client initialized');
// Initialize routes
app.use('/api/', routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(errors_1.errorMiddleware);
app.listen(secrets_1.PORT, () => {
    console.log('Server is running on PORT ', secrets_1.PORT);
});
