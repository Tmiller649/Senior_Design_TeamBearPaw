# weight in kg
# height in m
# gender: 0 for male 1 for female
def BMI_calc(w, h):
    # calculate BMI because why not
    return round(w/((h*0.01)**2))
def pa_calc(age, gender, pal):
    # data taken directly from page 82 of dietary reference intakes
    if pal == 0:
        return 1
    elif age < 19 and gender:
        if pal == 1:
            return 1.16
        if pal == 2:
            return 1.31
        if pal == 3:
            return 1.56
    elif age < 19 and not gender:
        if pal == 1:
            return 1.13
        if pal == 2:
            return 1.26
        if pal == 3:
            return 1.42
    elif age >= 19 and gender:
        if pal == 1:
            return 1.12
        if pal == 2:
            return 1.27
        if pal == 3:
            return 1.45
    elif age >= 19 and not gender:
        if pal == 1:
            return 1.11
        if pal == 2:
            return 1.25
        if pal == 3:
            return 1.48

def EER_calc(gender, age, weight, height, pal):
    # EER: estimated energy requirement
    # data taken from page 82 of dietary reference intakes
    pa = pa_calc(age=age, gender=gender, pal=pal)
    if age < 19:
        e = 25
        if gender: #for girls < 19
            a = 135.3
            b = 30.8
            c = 10.0
            d = 934
        else:
            a = 88.5
            b = 61.9
            c = 26.7
            d = 903
    else:
        e = 0
        if gender:
            a = 354
            b = 6.91
            c = 9.36
            d = 726
        else:
            a = 662
            b = 9.53
            c = 15.91
            d = 539.6
    eer = a - (b * age) + pa*((c*weight) + (d*(height*0.01))) + e #convert height from cm to m
    return round(eer)

def macro_count(eer):
    # calculate total macro needed based on eer (need to convert from calories to g)
    # Atwater Factors
    # goal can be weight loss, weight gain, weight maintain
    macro_range = {
        "carb": [round(0.45*eer/4), round(0.65*eer/4)],
        "protein": [round(0.1*eer/4), round(0.35*eer/4)],
        "fat": [round(0.2*eer/9),round(0.35*eer/9)]
    }
    return macro_range
# NEXT STEP: Find a healthy range of calories estimate for weight gain/loss (Research it)
# Return that range to frontend so user can customize their weight goal

### script test ###
if __name__ == '__main__':
    a = input('Name: ')
    gender = int(input('Enter 0 for male, 1 for female: '))
    age = int(input('Enter your age: '))
    weight = float(input('Enter your weight in kg: '))
    height = float(input('Enter your height in cm: '))
    pal = int(input('Enter your physical activity level (0 to 3, from not active, to very active): '))
    bmi_result = BMI_calc(w=weight, h=height)
    result = EER_calc(gender=gender, age=age, weight=weight, height=height, pal=pal)
    print('Your BMI: {0}'.format(bmi_result))
    print('Your estimated energy requirement per day: {0}'.format(result))
    macro_r = macro_count(result)
    print('Your estimated macro: ')
    for (k, v) in macro_r.items():
        print('{0}: {1} - {2} grams'.format(k,v[0],v[1]))