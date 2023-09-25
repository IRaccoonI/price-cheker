"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.SearchController = void 0;
var common_1 = require("@nestjs/common");
var search_dto_1 = require("./dto/search.dto");
var swagger_1 = require("@nestjs/swagger");
var SearchController = /** @class */ (function () {
    function SearchController(searchService) {
        this.searchService = searchService;
    }
    SearchController.prototype.create = function (searchDto) {
        return this.searchService.dnsSearch(searchDto);
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({ description: 'Create tag' }),
        swagger_1.ApiQuery({ type: search_dto_1.SearchDto }),
        swagger_1.ApiResponse({
            status: common_1.HttpStatus.OK,
            description: 'Searched results',
            type: search_dto_1.OutputSearchDto,
            isArray: true
        }),
        __param(0, common_1.Query())
    ], SearchController.prototype, "create");
    SearchController = __decorate([
        swagger_1.ApiTags('search'),
        common_1.Controller('search')
    ], SearchController);
    return SearchController;
}());
exports.SearchController = SearchController;
