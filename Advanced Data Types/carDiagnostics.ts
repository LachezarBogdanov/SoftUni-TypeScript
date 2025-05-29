function runDiagnostics() {
    return 'asd';
}

let car = { material: 'aluminum', state: 'scratched'};
let tyres = { airPressure: 30, condition: 'needs change'};
let engine = { horsepower: 300, oilDensity: 780}

type carType = typeof car;
type tyresType = typeof tyres;
type engineType = typeof engine;
type diagnostics = { partName: string, runDiagnostics: () => string };

function carDiagnostics(
    carBody: carType & diagnostics,
    tires: tyresType & diagnostics,
    engine: engineType & diagnostics) {}

carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics })