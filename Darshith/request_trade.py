# def calculate_tvu(base_value,demand,supply,transport_cost):
#     return (base_value * demand / supply) + transport_cost


# def main():
#     tvu_buy = calculate_tvu(10 , 20, 20,10)
#     tvu_offer =calculate_tvu(10,29,19,2)

#     if tvu_offer >= 0.7*tvu_buy:
#         pass
#     else:
#         print("Offer another item as this is not suitable for the trade")

import unittest
from Darshith.currency import CurrencyConverter, TradeEvaluator  # Replace with your actual filename

class TestCurrencyConverter(unittest.TestCase):

    def setUp(self):
        self.converter = CurrencyConverter()

    def test_mars_conversion(self):
        self.assertEqual(self.converter.tvu_to_mars(100), 10)
        self.assertEqual(self.converter.mars_to_tvu(10), 100)

    def test_jupiter_conversion(self):
        self.assertEqual(self.converter.tvu_to_jupiter(5), 50)
        self.assertEqual(self.converter.jupiter_to_tvu(50), 5)

    def test_saturn_conversion(self):
        self.assertEqual(self.converter.tvu_to_saturn(1), 100)
        self.assertEqual(self.converter.saturn_to_tvu(100), 1)

    def test_calculate_tvu(self):
        result = self.converter.calculate_tvu(base_value=10, demand=20, supply=10, transport_cost=5)
        self.assertEqual(result, 25.0)


class TestTradeEvaluator(unittest.TestCase):

    def setUp(self):
        self.converter = CurrencyConverter()
        self.evaluator = TradeEvaluator(self.converter)

    def test_trade_accepted(self):
        base_value = 10
        demand = 30
        supply = 10
        transport_cost = 5
        offer_value = 30  # This should be >= 0.7 * tvu_buy
        result = self.evaluator.evaluate_offer(base_value, demand, supply, transport_cost, offer_value)
        self.assertTrue(result)

    def test_trade_rejected(self):
        base_value = 10
        demand = 30
        supply = 10
        transport_cost = 5
        offer_value = 10  # Too low
        result = self.evaluator.evaluate_offer(base_value, demand, supply, transport_cost, offer_value)
        self.assertFalse(result)


if __name__ == '__main__':
    unittest.main()
