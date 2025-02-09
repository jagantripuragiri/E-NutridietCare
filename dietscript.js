
function generateDietPlan() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let age = document.getElementById("age").value;
    let bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let result = document.getElementById("result");
    let dietPlan = document.getElementById("dietPlan");

    if (!height || !weight || !age) {
        result.innerHTML = "Please fill all fields.";
        dietPlan.style.display = "none";
        return;
    }

    let dietType, meals;
    if (bmi < 18.5) {
        dietType = "Underweight (High-Calorie Diet)";
        meals = {
            breakfast: "Oatmeal with nuts & banana",
            lunch: "Brown rice with grilled chicken & veggies",
            snack: "Peanut butter toast with a smoothie",
            dinner: "Salmon with quinoa & steamed vegetables"
        };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        dietType = "Healthy Weight (Balanced Diet)";
        meals = {
            breakfast: "Scrambled eggs with whole wheat toast",
            lunch: "Quinoa salad with grilled fish",
            snack: "Greek yogurt with honey & nuts",
            dinner: "Stir-fried tofu with brown rice & veggies"
        };
    } else {
        dietType = "Overweight (Low-Calorie Diet)";
        meals = {
            breakfast: "Green smoothie with chia seeds",
            lunch: "Grilled chicken salad with olive oil dressing",
            snack: "Carrot & cucumber sticks with hummus",
            dinner: "Lentil soup with a side of steamed broccoli"
        };
    }

    result.innerHTML = `Your BMI: ${bmi} <br> Diet Plan: ${dietType}`;
    document.getElementById("breakfast").innerText = meals.breakfast;
    document.getElementById("lunch").innerText = meals.lunch;
    document.getElementById("snack").innerText = meals.snack;
    document.getElementById("dinner").innerText = meals.dinner;
    dietPlan.style.display = "block";
}
