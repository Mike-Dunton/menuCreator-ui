var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "aurelia-auth"], function (require, exports, aurelia_framework_1, aurelia_auth_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(auth) {
            this._isAuthenticated = false;
            this.auth = auth;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Menu Creator";
            config.map([
                { route: '', moduleId: 'no-selection', title: 'Welcome', nav: true },
                { route: 'recipes/:id', moduleId: 'recipe-detail', name: "recipes", auth: true, nav: false },
                { route: 'signup', name: 'signup', moduleId: './signup', nav: false, title: 'Signup', authRoute: true },
                { route: 'login', name: 'login', moduleId: './login', nav: false, title: 'Login', authRoute: true },
                { route: 'logout', name: 'logout', moduleId: './logout', nav: false, title: 'Logout', authRoute: true }
            ]);
            this.router = router;
        };
        Object.defineProperty(App.prototype, "isAuthenticated", {
            get: function () {
                return this.auth.isAuthenticated();
            },
            enumerable: true,
            configurable: true
        });
        ;
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_auth_1.AuthService])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLEdBQUc7UUFnQmQsYUFBWSxJQUFpQjtZQUY3QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFHdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQztRQWhCRCw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN6RCxNQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQTtZQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQztnQkFDbkUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUM7Z0JBQzNGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7Z0JBQ3RHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7Z0JBQ2xHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7YUFDdkcsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQU9ELHNCQUFJLGdDQUFlO2lCQUFuQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNyQyxDQUFDOzs7V0FBQTtRQUFBLENBQUM7UUFDSixVQUFDO0lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtJQXRCWSxHQUFHO1FBRGYsOEJBQVU7eUNBaUJTLDBCQUFXO09BaEJsQixHQUFHLENBc0JmO0lBdEJZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7RmV0Y2hDb25maWd9IGZyb20gJ2F1cmVsaWEtYXV0aCdcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJ2F1cmVsaWEtYXV0aCc7XG5cbkBhdXRvaW5qZWN0XG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcm91dGVyOiBSb3V0ZXI7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKXtcbiAgICBjb25maWcudGl0bGUgPSBcIk1lbnUgQ3JlYXRvclwiXG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiAnJywgbW9kdWxlSWQ6ICduby1zZWxlY3Rpb24nLCB0aXRsZTogJ1dlbGNvbWUnLCBuYXY6IHRydWV9LFxuICAgICAgeyByb3V0ZTogJ3JlY2lwZXMvOmlkJywgbW9kdWxlSWQ6ICdyZWNpcGUtZGV0YWlsJywgbmFtZTogXCJyZWNpcGVzXCIsIGF1dGg6IHRydWUsIG5hdjogZmFsc2V9LFxuICAgICAgeyByb3V0ZTogJ3NpZ251cCcsIG5hbWU6ICdzaWdudXAnLCBtb2R1bGVJZDogJy4vc2lnbnVwJywgbmF2OiBmYWxzZSwgdGl0bGU6J1NpZ251cCcsIGF1dGhSb3V0ZTogdHJ1ZSB9LFxuICAgICAgeyByb3V0ZTogJ2xvZ2luJywgbmFtZTogJ2xvZ2luJywgbW9kdWxlSWQ6ICcuL2xvZ2luJywgbmF2OiBmYWxzZSwgdGl0bGU6J0xvZ2luJywgYXV0aFJvdXRlOiB0cnVlIH0sXG4gICAgICB7IHJvdXRlOiAnbG9nb3V0JywgbmFtZTogJ2xvZ291dCcsIG1vZHVsZUlkOiAnLi9sb2dvdXQnLCBuYXY6IGZhbHNlLCB0aXRsZTonTG9nb3V0JywgYXV0aFJvdXRlOiB0cnVlIH1cbiAgICBdKTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIF9pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgYXV0aDogQXV0aFNlcnZpY2U7XG4gIGNvbnN0cnVjdG9yKGF1dGg6IEF1dGhTZXJ2aWNlKSB7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgfVxuICBnZXQgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('auth-config',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var config = {
        baseUrl: 'http://localhost:8080',
        signupUrl: 'addUser',
        loginUrl: 'auth/login',
        tokenName: 'token'
    };
    exports.default = config;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBLElBQUksTUFBTSxHQUFHO1FBR1gsT0FBTyxFQUFFLHVCQUF1QjtRQUVoQyxTQUFTLEVBQUUsU0FBUztRQUVwQixRQUFRLEVBQUUsWUFBWTtRQUd0QixTQUFTLEVBQUUsT0FBTztLQUVuQixDQUFBO0lBRUQsa0JBQWUsTUFBTSxDQUFDIiwiZmlsZSI6ImF1dGgtY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3BlY2lmaWMgc2V0dGluZ3MgZm9yIG91ciBhcHBsaWNhdGlvbidzXG4vLyBhdXRoZW50aWNhdGlvbiBjb250ZXh0LiBUaGVzZSB3aWxsIG92ZXJyaWRlXG4vLyB0aGUgZGVmYXVsdCBzZXR0aW5ncyBwcm92aWRlZCBieSBhdXJlbGlhdXRoXG5cbnZhciBjb25maWcgPSB7XG5cbiAgLy8gT3VyIE5vZGUgQVBJIGlzIGJlaW5nIHNlcnZlZCBmcm9tIGxvY2FsaG9zdDozMDAxXG4gIGJhc2VVcmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAvLyBUaGUgQVBJIHNwZWNpZmllcyB0aGF0IG5ldyB1c2VycyByZWdpc3RlciBhdCB0aGUgUE9TVCAvdXNlcnMgZW5wb2ludC5cbiAgc2lnbnVwVXJsOiAnYWRkVXNlcicsXG4gIC8vIExvZ2lucyBoYXBwZW4gYXQgdGhlIFBPU1QgL3Nlc3Npb25zL2NyZWF0ZSBlbmRwb2ludC5cbiAgbG9naW5Vcmw6ICdhdXRoL2xvZ2luJyxcbiAgLy8gVGhlIEFQSSBzZXJ2ZXMgaXRzIHRva2VucyB3aXRoIGEga2V5IG9mIGlkX3Rva2VuIHdoaWNoIGRpZmZlcnMgZnJvbVxuICAvLyBhdXJlbGlhdXRoJ3Mgc3RhbmRhcmQuXG4gIHRva2VuTmFtZTogJ3Rva2VuJ1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment", "./auth-config"], function (require, exports, environment_1, auth_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-auth', function (baseConfig) {
            baseConfig.configure(auth_config_1.default);
        });
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBS0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLFVBQUMsVUFBVTtZQUNqQyxVQUFVLENBQUMsU0FBUyxDQUFDLHFCQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVMLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBakJELDhCQWlCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9hdXRoLWNvbmZpZyc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpXG4gICAgLnBsdWdpbignYXVyZWxpYS1hdXRoJywgKGJhc2VDb25maWcpID0+IHtcbiAgICAgIGJhc2VDb25maWcuY29uZmlndXJlKGNvbmZpZyk7XG4gICAgfSk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('no-selection',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "Please Select a Recipe.";
        }
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLHlCQUF5QixDQUFDO1FBQ3RDLENBQUM7UUFBRCxrQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0NBQVciLCJmaWxlIjoibm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vU2VsZWN0aW9uIHtcbiAgbWVzc2FnZSA9IFwiUGxlYXNlIFNlbGVjdCBhIFJlY2lwZS5cIjtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('recipe-detail',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "Please Select a Recipe.";
        }
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtZQUNFLFlBQU8sR0FBRyx5QkFBeUIsQ0FBQztRQUN0QyxDQUFDO1FBQUQsa0JBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLGtDQUFXIiwiZmlsZSI6InJlY2lwZS1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTm9TZWxlY3Rpb24ge1xuICBtZXNzYWdlID0gXCJQbGVhc2UgU2VsZWN0IGEgUmVjaXBlLlwiO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('signup',["require", "exports", "aurelia-framework", "aurelia-auth"], function (require, exports, aurelia_framework_1, aurelia_auth_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(auth) {
            this.heading = 'Sign Up';
            this.email = '';
            this.password = '';
            this.signupError = 'asd';
            this.auth = auth;
        }
        App.prototype.signup = function () {
            var _this = this;
            return this.auth.signup("blah", this.email, this.password)
                .then(function (response) {
                console.log("Singed Up", response);
            })
                .catch(function (error) {
                console.log("I AM IN THE ERROR error", error);
                error.text().then(function (text) {
                    console.log(error);
                    _this.signupError = text;
                });
            });
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_auth_1.AuthService])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLEdBQUc7UUFPZCxhQUFZLElBQWlCO1lBTjdCLFlBQU8sR0FBRyxTQUFTLENBQUM7WUFDcEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxnQkFBVyxHQUFHLEtBQUssQ0FBQztZQUlsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDO1FBRUQsb0JBQU0sR0FBTjtZQUFBLGlCQVlDO1lBWEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQ3pELElBQUksQ0FBQyxVQUFDLFFBQVE7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDN0MsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ2xCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNILFVBQUM7SUFBRCxDQXhCQSxBQXdCQyxJQUFBO0lBeEJZLEdBQUc7UUFEZiw4QkFBVTt5Q0FRUywwQkFBVztPQVBsQixHQUFHLENBd0JmO0lBeEJZLGtCQUFHIiwiZmlsZSI6InNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBBcHAge1xuICBoZWFkaW5nID0gJ1NpZ24gVXAnO1xuICBlbWFpbCA9ICcnO1xuICBwYXNzd29yZCA9ICcnO1xuICBzaWdudXBFcnJvciA9ICdhc2QnO1xuXG4gIGF1dGg6IEF1dGhTZXJ2aWNlO1xuICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSkge1xuICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gIH1cblxuICBzaWdudXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aC5zaWdudXAoXCJibGFoXCIsIHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNpbmdlZCBVcFwiLCByZXNwb25zZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJJIEFNIElOIFRIRSBFUlJPUiBlcnJvclwiLCBlcnJvcilcbiAgICAgIGVycm9yLnRleHQoKS50aGVuKCh0ZXh0KSA9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICB0aGlzLnNpZ251cEVycm9yID0gdGV4dDtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./style.css\"></require><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation | authFilter: isAuthenticated\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul if.bind=\"!isAuthenticated\" class=\"nav navbar-nav navbar-right\"><li><a href=\"/#/login\">Login</a></li><li><a href=\"/#/signup\">Signup</a></li></ul><ul if.bind=\"isAuthenticated\" class=\"nav navbar-nav navbar-right\"><li><a href=\"/#/logout\">Logout</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav><div class=\"container\"><div class=\"row\"><router-view class=\"col-md-8\"></router-view></div></div></template>"; });
define('text!style.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
define('text!recipe-detail.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
define('text!signup.html', ['module'], function(module) { module.exports = "<template><form role=\"form\" submit.delegate=\"signup()\"><div class=\"form-group\"><label for=\"email\">Email</label><input type=\"text\" value.bind=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\"></div><div class=\"form-group\"><label for=\"password\">Password</label><input type=\"password\" value.bind=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"></div><button type=\"submit\" class=\"btn btn-default\">Signup</button></form><hr><div class=\"alert alert-danger\" if.bind=\"signupError\">${signupError}</div></template>"; });
//# sourceMappingURL=app-bundle.js.map