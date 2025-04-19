class CurrencyConverter():

    def __init__(self):
        pass 

    def calculate_tvu(self,base_value,demand,supply,transport_cost):
        return (base_value * demand / supply) + transport_cost

    def tvu_to_earth(self,tvu_value):
        return tvu_value
    
    def earth_to_tvu(self , earth_value):
        return earth_value
    
    def tvu_to_mars(self,tvu_value):
        return tvu_value/10
    
    def mars_to_tvu(self,mars_value):
        return mars_value*10
    
    def tvu_to_jupyter(self,tvu_value):
        return tvu_value*10
    
    def jupyter_to_tvu(self,jupyter):
        return jupyter/10

    def tvu_to_saturn(self,tvu_value):
        return tvu_value*100
    
    def saturn_to_tvu(self,saturn_value):
        return saturn_value/100

class TradeEvaluator:
    def __init__(self, converter: CurrencyConverter):
        self.converter = converter

    def evaluate_offer(self, base_value, demand, supply, transport_cost, offer_value):
        tvu_buy = self.calculate_tvu(base_value, demand, supply, transport_cost)
        tvu_offer = offer_value
        if tvu_offer >= 0.7 * tvu_buy:
            return True
        return False

    def calculate_tvu(self, base_value, demand, supply, transport_cost):
        return (base_value * demand / supply) + transport_cost

def main():
    pass
    
if __name__ == '__main__':
    main()