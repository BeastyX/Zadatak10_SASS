let valueDisplay = document.querySelectorAll(".num"); // Selektovanje svih elemenata sa klasom .num
let interval = 4000; // Ukupno trajanje animacije

// Create an Intersection Observer
let observer = new IntersectionObserver( // IntersectionObserver => Ovo je API koji prati kada određeni element uđe u vidljivi deo prozora (viewport).
    (entries, observer) => 
    {
        entries.forEach((entry) => 
        {
            if (entry.isIntersecting) // Proverava da li je element trenutno vidljiv
            {

                let valueDisplay = entry.target; // Referenca na HTML element koji je postao vidljiv.

                let startValue = 0; // Pocetna animacija je 0
                let endValue = parseInt(valueDisplay.getAttribute("data-val")); // Uzima krajnju vrednost iz atributa data-val npr 546
                console.log(endValue);

                let steps = Math.min(endValue, 500); // Steps definiše maksimalan broj koraka animacije
                let increment = Math.ceil(endValue / steps); // Računa koliko će se vrednost povećavati u svakom koraku.
                let duration = Math.floor(interval / endValue); // Računa koliko će trajati svaki korak

                // POKRETANJE ANIMACIJE
                let counter = setInterval(function () 
                {
                    startValue += increment;

                    if (startValue > endValue) startValue = endValue;
                    valueDisplay.textContent = startValue.toLocaleString();

                    if (startValue >= endValue) 
                    {
                        clearInterval(counter);
                    }
                }, duration);

                observer.unobserve(valueDisplay); //  Intersection Observer prestaje da prati taj element.
            }
        });
    },
    { threshold: 0.5 } // Prag vidljivosti definiše koliko procenta elementa mora biti vidljivo pre nego što se animacija pokrene.
);

valueDisplay.forEach((num) => { // Prolazi kroz sve elemente sa klasom .num i dodaje ih u Intersection Observer.
    observer.observe(num);
});
