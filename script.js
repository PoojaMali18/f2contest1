const data =
    [
        { name: "john", age: 29, profession: "developer" },
        { name: "jane", age: 27, profession: "admin" },
        { name: "tiger", age: 28, profession: "developer" },

    ];

// 1. Print Developers
function printDeveloper() {


    //  for (const dev in data) 
    //      {
    //          const dec = data[dev];
    //          if (dec.profession == "developer") 
    //          {
    //              console.log(dec);
    //          }
    //      }

    for (let i = 0; i < data.length; i++) {
        if (data[i].profession == "developer")
            console.log(data[i]);
    }
}


// 2. Add Data
function addData() {
    let name = prompt("Enter the name:");
    let age = prompt("Enter the age:");
    let profession = prompt("Enter the profession:");

    const newData =
    {
        name: name,
        age: age,
        profession: profession,
    };

    data.push(newData);
    console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].profession == "admin") {
            data.splice(i, 1);
        }
    }
    console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {

    const datanew = [
        { name: "meena", age: 42, profession: "admin" },
        { name: "simon", age: 72, profession: "admin" },
    ]
    const concatarr = data.concat(datanew);
    console.log(concatarr);
}

// 5. Average Age
function averageAge() {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum = sum + data[i].age;
    }
    let avg = sum / data.length;
    console.log(avg);
}

// 6. Age Check
function checkAgeAbove25() {
    let fun = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].age > 25) {
                return true;
            }
        }
        return false;
    }
    console.log(fun());
}

// 7. Unique Professions
function uniqueProfessions() {
    const professions = []; // An array to store distinct professions

    for (let i = 0; i < data.length; i++) {
        const profession = data[i].profession;


        if (professions.indexOf(profession) == -1) {
            professions.push(profession); // Add the profession to the array
        }
    }

    // Log the distinct professions
    console.log(professions);
}

// 8. Sort by Age
function sortByAge() {
    data.sort((a, b) => a.age - b.age)
    console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
    let index=0;
    for (let i=0; i<data.length; i++) 
    {
       
        if (data[i].name == "john")
        {
            index=i;
            data[i].profession = "manager";
        }
    }
    console.log(data[index]);
}

// 10. Profession Count
function getTotalProfessions() 
{
    const professions = []; 

    for (let i = 0; i < data.length; i++) {
        const profession = data[i].profession;


        if (professions.indexOf(profession) == -1) 
        {
            professions.push(profession); 
        }
    }

    // Log the distinct professions
    console.log(professions.length);
 }

