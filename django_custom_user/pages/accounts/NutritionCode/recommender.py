# recommender pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import FunctionTransformer
from sklearn.pipeline import Pipeline
import pandas as pd
import re
# datafp = "./data/master_food_compressed.csv"
# master_df = pd.read_csv(datafp, compression='gzip', index_col="DishID")
def scaling(dataframe):
    scaler=StandardScaler()
    prep_data=scaler.fit_transform(dataframe.iloc[:,4:13].to_numpy())
    return prep_data,scaler

def nn_predictor(prep_data):
    neigh = NearestNeighbors(metric='cosine',algorithm='brute')
    neigh.fit(prep_data)
    return neigh

def build_pipeline(neigh,scaler,params):
    transformer = FunctionTransformer(neigh.kneighbors,kw_args=params)
    pipeline=Pipeline([('std_scaler',scaler),('NN',transformer)])
    return pipeline

def extract_data(dataframe,keyword_filter,max_nutritional_values=None):
    extracted_data=dataframe.copy()
    extracted_data.fillna('', inplace=True)
    if max_nutritional_values != None:
        for column,maximum in zip(extracted_data.columns[4:13],max_nutritional_values):
            extracted_data=extracted_data[extracted_data[column]<maximum]
    if keyword_filter!=None:
        for keyword in keyword_filter:
            extracted_data=extracted_data[extracted_data['Keywords'].str.contains(keyword,regex=False)]
    return extracted_data

def apply_pipeline(pipeline,_input,extracted_data):
    return extracted_data.iloc[pipeline.transform(_input)[0]]

def recommend(dataframe,_input,max_nutritional_values=None,keyword_filter=None,params={'return_distance':False}):
    extracted_data=extract_data(dataframe,keyword_filter,max_nutritional_values)
    prep_data,scaler=scaling(extracted_data)
    neigh=nn_predictor(prep_data)
    pipeline=build_pipeline(neigh,scaler,params)
    return apply_pipeline(pipeline,_input,extracted_data)

### Need a function to create a json packet for the dataframe
def extract_quoted_strings(s):
    if type(s) != str:
        return ""
    # Find all the strings inside double quotes
    strings = re.findall(r'"([^"]*)"', s)
    # Join the strings with 'and'
    return strings

def output_rec(dataframe):
    recs = dataframe.copy()
    recs=recs.to_dict("records")
    for recipe in recs:
        recipe['RecipeIngredientParts']=extract_quoted_strings(recipe['RecipeIngredientParts'])
        recipe['RecipeInstructions']=extract_quoted_strings(recipe['RecipeInstructions'])
    return recs

# if __name__ == "__main__":
#     # max_Calories=1000
#     # max_daily_fat=100
#     # max_daily_Saturatedfat=13
#     # max_daily_Cholesterol=300
#     # max_daily_Sodium=2300
#     # max_daily_Carbohydrate=325
#     # max_daily_Fiber=40
#     # max_daily_Sugar=40
#     # max_daily_Protein=200
#     # max_list=[max_Calories,max_daily_fat,max_daily_Saturatedfat,max_daily_Cholesterol,max_daily_Sodium,max_daily_Carbohydrate,max_daily_Fiber,max_daily_Sugar,max_daily_Protein] # This is user input
#     extracted_data=master_df.copy()
#     # for column,maximum in zip(extracted_data.columns[4:13],max_list):
#     #     extracted_data=extracted_data[extracted_data[column]<maximum]
#     test_input=extracted_data.iloc[12:13,4:13].to_numpy() # This is user input
#     rec_data = recommend(master_df,test_input, keyword_filter=["vegan"]) #,max_list,)
#     for item in output_rec(rec_data):
#         print(item)