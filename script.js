// scripts.js
function generateReport() {
    const waterIntake = document.getElementById('waterIntake').value;
    const sleepHours = document.getElementById('sleepHours').value;
    const stepsPerDay = document.getElementById('stepsPerDay').value;
    const caloriesIntake = document.getElementById('caloriesIntake').value;
    
    let report = "Health Report\n";
    report += "------------------------\n";
    report += `Water Intake: ${waterIntake} liters\n`;
    report += `Sleep Hours: ${sleepHours} hours\n`;
    report += `Steps Per Day: ${stepsPerDay} steps\n`;
    report += `Calories Intake: ${caloriesIntake} kcal\n`;
    
    if (waterIntake < 2) {
        report += "Water intake is below the recommended 2 liters. Drink more water.\n";
    } else {
        report += "Water intake is adequate.\n";
    }
    
    if (sleepHours < 7) {
        report += "Sleep hours are below the recommended 7-9 hours. Try to get more sleep.\n";
    } else {
        report += "Sleep hours are adequate.\n";
    }
    
    if (stepsPerDay < 10000) {
        report += "You should aim for at least 10,000 steps per day. Increase your activity level.\n";
    } else {
        report += "Steps per day are adequate.\n";
    }
    
    if (caloriesIntake > 2500) {
        report += "Calories intake is above the recommended daily intake. Watch your diet.\n";
    } else {
        report += "Calories intake is within the recommended range.\n";
    }
    
    document.getElementById('report').innerText = report;
}
