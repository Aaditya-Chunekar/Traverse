from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates 
from currency import CurrencyConverter

app = FastAPI()
converter = CurrencyConverter()

templates = Jinja2Templates(directory='template')

@app.get("/",response_class=HTMLResponse)
def read_from(request: Request):
    return templates.TemplateResponse("index.html",{"request":request})

@app.post("/",response_class=HTMLResponse)
def convert(
    request:Request,
    amount:float = Form(...),
    from_currency: str = Form(...),
    to_currency: str = Form(...)
):
    to_tvu = getattr(converter, f"{from_currency}_to_tvu")
    from_tvu = getattr(converter, f"tvu_to_{to_currency}")
    tvu_value = to_tvu(amount)
    result = from_tvu(tvu_value)
    return templates.TemplateResponse("index.html", {
        "request": request,
        "result": result
    })
