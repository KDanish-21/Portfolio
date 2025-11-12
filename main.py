from fastapi import FastAPI 
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
def read_root():
    with open("templates/home.html", "r", encoding="utf-8") as f:
        return f.read()
    
# @app.get("/test", response_class=HTMLResponse)
# def read_test():
#     with open("templates/test.html", "r", encoding="utf-8") as f:
#         return f.read()