const counters = document.querySelectorAll(".counter");

function startCounter(counter){

    const target = parseInt(counter.dataset.target);

    let current = 0;

    const duration = 2000;

    const stepTime = 20;

    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {

        current += increment;

        if(current >= target){

            current = target;

            clearInterval(timer);

        }

        counter.innerText = Math.floor(current);

    }, stepTime);

}

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{

    observer.observe(counter);

});

