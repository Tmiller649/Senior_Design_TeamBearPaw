from .recommender import recommend, output_rec
from .weight_calc import BMI_calc, EER_calc, nutrition_count
from random import uniform
import pandas as pd
import numpy as np
import json
# from django.db import models

data = pd.read_csv("./accounts/NutritionCode/data/master_food_compressed.csv", compression='gzip', index_col="DishID")

# class Recipe(models.Model):
#     name = models.CharField()
#     calories = models.FloatField()
#     fat = models.FloatField()
#     carbohydrate = models.FloatField()
#     sugar = models.FloatField()
#     sodium = models.FloatField()
#     protein = models.FloatField()
#     instruction = models.TextField()

# class MealPrediction(models.Model):
#     meal = models.JSONField()

def update_recommend(nutrition_info):
    # age, height, weight, gender, pal = 22, 66.14, 132.28, 1, 3
    # eer = EER_calc(gender=gender, age=age, weight=weight, height=height, pal=pal)
    # nutrition_info = nutrition_count(eer)
    nutrition_per_meal = {k: [round(v[0] / 3), round(v[1] / 3)] for k, v in nutrition_info.items()}
    recommed_nutrition = np.array([uniform(nutrition_per_meal["Calories"][0],nutrition_per_meal["Calories"][1]),
                          uniform(nutrition_per_meal["FatContent"][0],nutrition_per_meal["FatContent"][1]),
                          uniform(nutrition_per_meal["SaturatedFatContent"][0],nutrition_per_meal["SaturatedFatContent"][1]),
                          uniform(nutrition_per_meal["CholesterolContent"][0],nutrition_per_meal["CholesterolContent"][1]),
                          uniform(nutrition_per_meal["SodiumContent"][0],nutrition_per_meal["SodiumContent"][1]),
                          uniform(nutrition_per_meal["CarbohydrateContent"][0],nutrition_per_meal["CarbohydrateContent"][1]),
                          uniform(nutrition_per_meal["FiberContent"][0],nutrition_per_meal["FiberContent"][1]),
                          uniform(nutrition_per_meal["SugarContent"][0],nutrition_per_meal["SugarContent"][1]),
                          uniform(nutrition_per_meal["ProteinContent"][0],nutrition_per_meal["ProteinContent"][1])
                          ], ndmin=2)
    # print(recommed_nutrition)
    recommend_df = recommend(data,recommed_nutrition)
    return output_rec(recommend_df)

### test script ###
# if __name__ == "__main__":
#     print(update_recommend())