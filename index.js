"use strict";
exports.__esModule = true;
var express = require("express");
var pokerequest_1 = require("./pokerequest");
var userrequest_1 = require("./userrequest");
var body_parser_1 = require("body-parser");
var App = /** @class */ (function () {
    function App(port, midelContorler, app) {
        this.app = (!app) ? express() : app;
        this.app.use('/', midelContorler);
        this.port = port;
    }
    App.prototype.ActualizarMapa = function () {
        // definir nuevas posion de los poquemones 
    };
    App.prototype.listen = function () {
        var _this = this;
        setInterval(this.ActualizarMapa, 1000 * 60 * 60 * 24); // se actualiza el mapa cada 24 horas 
        this.app.listen(this.port, function () {
            console.log("listening http://localhost:" + _this.port);
        });
    };
    return App;
}());
var MidelContorler = /** @class */ (function () {
    function MidelContorler() {
        this.router = express.Router();
        this.rutas();
    }
    MidelContorler.prototype.searchUserById = function (id) {
        // buscar User 
        // ejemplo de lo que debe retornar  user 
        return { userid: 1, username: "user", totalPoints: 1, pokedex: [{ name: "pika", quatity: 5 }], retodex: [] };
    };
    MidelContorler.prototype.searchRoundPokemon = function (x, y) {
        // buscar o generar los pokemon cercanos a x , y 
        // enviar respiesta 
        return { nearest: [
                { pokemonID: 1, name: "", points: 1, time: 2000, position: { x: 1, y: 2 }, question: "", answer: "" }
            ] };
    };
    MidelContorler.prototype.rutas = function () {
        var _this = this;
        this.router.get('/poke', function (req, res) {
            console.log(pokerequest_1["default"]);
            res.json(pokerequest_1["default"]);
        });
        this.router.get('/user', function (req, res) {
            console.log(userrequest_1["default"]);
            res.json(userrequest_1["default"]);
        });
        // retorna datos del uusario 
        this.router.get('/userid/:id', function (req, res) {
            var id = parseInt(req.params.id, 10);
            var user = _this.searchUserById(id);
            res.json(user);
        });
        // retorna pokemones cercanos 
        this.router.get('/pokeround/:x&:y', function (req, res) {
            var x = parseInt(req.params.x);
            var y = parseInt(req.params.y);
            var nearst = _this.searchRoundPokemon(x, y);
            res.json(nearst);
        });
        this.router.post('/createEmpresa', function (req, res) {
            var nombre = req.body.nombre;
            var password = req.body.password;
            var empresa = req.body.empresa;
            // guardar user admin y empresa 
            res.json({});
        });
        this.router.post('/createEmpresa', function (req, res) {
            var nombre = req.body.nombre;
            var password = req.body.password;
            var empresa = req.body.empresa;
            // guardar usaer 
            res.json({});
        });
        this.router.post('/loginAdmin', function (req, res) {
            var nombre = req.body.nombre;
            var password = req.body.password;
            // verificar datos 
            res.json({
                status: "ok",
                token: "123"
            });
        });
        this.router.post('/loginUser', function (req, res) {
            var nombre = req.body.nombre;
            var password = req.body.password;
            // verificar datos 
            // obtener datos del usar 
            var id = 1;
            var user = _this.searchUserById(id);
            res.json({
                status: "ok",
                token: "123",
                user: user
            });
        });
        this.router.post('/capture', function (req, res) {
            var nombre = req.body.nombre;
            // posibilidades 
            var password = req.body.password;
            var token = req.body.token;
            var respuesta = req.body.token;
            // verificar datos y  respuesta
            // obtener datos del usar 
            var id = 1;
            var user = _this.searchUserById(id);
            res.json({
                status: "ok",
                resultado: true,
                user: user
            });
        });
        this.router.post('/getPokemon', function (req, res) {
            var position = req.body.position;
            // buscar poquemones alrededor 
            var round = _this.searchRoundPokemon(position.x, position.y);
            res.json(round);
        });
        this.router.post('/getData', function (req, res) {
            var nombre = req.body.nombre;
            // posibilidades 
            var password = req.body.password;
            var token = req.body.token;
            // buscar poquemones alrededor 
            res.json({});
        });
    };
    return MidelContorler;
}());
var app = express();
app.use(body_parser_1.json());
app.use(body_parser_1.raw());
app.use(body_parser_1.text());
app.use(body_parser_1.urlencoded());
var port = 8080;
var portServer = 80;
var router = new MidelContorler().router;
var aplication = new App(portServer, router, app);
aplication.listen();
//(new App(8080, new MidelContorler().router,app)).listen()
