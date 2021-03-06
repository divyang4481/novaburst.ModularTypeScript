var NovaBurst;
(function (NovaBurst) {
    var ModularTypeScript;
    (function (ModularTypeScript) {
        var Core;
        (function (Core) {
            var PagingOptions = (function () {
                function PagingOptions() {
                }
                PagingOptions.prototype.getPageSize = function () {
                    return this.take;
                };
                PagingOptions.prototype.getPageIndex = function () {
                    if (!this.take || this.skip == null || typeof (this.skip) == 'undefined')
                        return 1;
                    return Math.floor(this.skip / this.take) + 1;
                };
                PagingOptions.prototype.setSkip = function (skip) {
                    this.skip = skip;
                    return this;
                };
                PagingOptions.prototype.setTake = function (take) {
                    this.take = take;
                    return this;
                };
                PagingOptions.prototype.setPage = function (pageIndex, pageSize) {
                    this.take = pageSize;
                    this.skip = (pageIndex - 1) * pageSize;
                    return this;
                };
                return PagingOptions;
            })();
            Core.PagingOptions = PagingOptions;
        })(Core = ModularTypeScript.Core || (ModularTypeScript.Core = {}));
    })(ModularTypeScript = NovaBurst.ModularTypeScript || (NovaBurst.ModularTypeScript = {}));
})(NovaBurst || (NovaBurst = {}));
//# sourceMappingURL=PagingOptions.js.map