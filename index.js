"use strict";
exports.__esModule = true;
var express = require("express");
var pokerequest_1 = require("./pokerequest");
var userrequest_1 = require("./userrequest");
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
        return { userid: 1, username: "user", totalPoints: 1, pokedex: [], retodex: [] };
    };
    MidelContorler.prototype.searchRoundPokemon = function (x, y) {
        // buscar o generar los pokemon cercanos a x , y 
        // enviar respiesta 
        return { nearest: [] };
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
    };
    return MidelContorler;
}());
(new App(8080, new MidelContorler().router)).listen();
