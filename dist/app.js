"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const express_validator_1 = __importDefault(require("express-validator"));
const lusca_1 = __importDefault(require("lusca"));
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
require("./controllers/awesome");
const errorhandler_1 = __importDefault(require("errorhandler"));
const app = express_1.default();
const port = +process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.set("port", port);
app.set("view engine", "ejs");
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(compression_1.default());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_validator_1.default());
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
app.use(errorhandler_1.default());
// load everything needed to the Container
const container = new inversify_1.Container();
// start the server
const server = new inversify_express_utils_1.InversifyExpressServer(container, undefined, { rootPath: "/" }, app);
server.setConfig((app) => { });
exports.default = server.build();
//# sourceMappingURL=app.js.map