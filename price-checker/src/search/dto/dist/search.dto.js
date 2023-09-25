"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OutputSearchDto = exports.SearchDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var SearchDto = /** @class */ (function () {
    function SearchDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        swagger_1.ApiProperty()
    ], SearchDto.prototype, "search");
    return SearchDto;
}());
exports.SearchDto = SearchDto;
var OutputSearchDto = /** @class */ (function () {
    function OutputSearchDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        swagger_1.ApiProperty()
    ], OutputSearchDto.prototype, "id");
    __decorate([
        class_validator_1.IsNumber(),
        swagger_1.ApiProperty()
    ], OutputSearchDto.prototype, "totalRating");
    __decorate([
        class_validator_1.IsNumber(),
        swagger_1.ApiProperty()
    ], OutputSearchDto.prototype, "averageRating");
    __decorate([
        class_validator_1.IsString(),
        swagger_1.ApiProperty()
    ], OutputSearchDto.prototype, "imgSrc");
    __decorate([
        class_validator_1.IsEnum(['dns']),
        swagger_1.ApiProperty()
    ], OutputSearchDto.prototype, "market");
    __decorate([
        class_validator_1.IsNumber(),
        swagger_1.ApiProperty()
    ], OutputSearchDto.prototype, "price");
    __decorate([
        class_validator_1.IsString(),
        swagger_1.ApiProperty()
    ], OutputSearchDto.prototype, "title");
    return OutputSearchDto;
}());
exports.OutputSearchDto = OutputSearchDto;
