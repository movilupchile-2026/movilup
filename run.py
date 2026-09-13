from flask import Flask, render_template


def create_app():
    app = Flask(
        __name__,
        template_folder="app/templates",
        static_folder="app/static",
    )

    @app.get("/")
    def home():
        return render_template("pages/home.html")

    @app.get("/servicios")
    def services():
        return render_template("pages/services.html")

    @app.get("/trabajos")
    def projects():
        return render_template("pages/projects.html")

    @app.get("/historia")
    def about():
        return render_template("pages/about.html")

    @app.get("/contacto")
    def contact():
        return render_template("pages/contact.html")

    @app.get("/catalogo")
    def catalog():
        return render_template("catalog/index.html")

    @app.get("/cotizar")
    def quote():
        return render_template("quotes/request.html")

    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)
