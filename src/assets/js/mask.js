function initNav() {
    //if(window.innerWidth > 899) {
        
        window.addEventListener('resize', toggleTransitionTime);

        const navToMask = document.querySelector('.layer-mask');
        const navNotMask = document.querySelector('.not-masked');
        const buttons = navNotMask.getElementsByTagName('button');

        let newCoords;
        let currentButton = navToMask.firstChild;

        // use spread operator to change nodelist to an array 
        // so we can easily iterate over it

        [...buttons].forEach(element => {
            element.addEventListener('click', () => {
                applyNewClipPathCoords(element);
            });
        });


        function applyNewClipPathCoords(_target) {
            currentButton = _target;
            let newLeft = _target.getBoundingClientRect().left - navToMask.getBoundingClientRect().left;
            let newRight = navToMask.getBoundingClientRect().right - _target.getBoundingClientRect().right;
            newCoords = `inset(0px ${newRight}px 0px ${newLeft}px)`;
            navToMask.style.cssText = `transition-duration: 0.5s; clip-path: ${newCoords};`
        }

        function toggleTransitionTime() {
            console.log('right edge', navToMask.getBoundingClientRect().right);
            // keeps mask nav from looking weird when user resizes
            // window.
            // does NOT cancel size adjustment of width of mask (yay!)
            let newLeft = currentButton.getBoundingClientRect().left - navToMask.getBoundingClientRect().left;
            let newRight = navToMask.getBoundingClientRect().right - currentButton.getBoundingClientRect().right;
            newCoords = `inset(0px ${newRight}px 0px ${newLeft}px)`;            
            navToMask.style.cssText = `clip-path: ${newCoords};`
        }

    //}

    applyNewClipPathCoords(currentButton);
}