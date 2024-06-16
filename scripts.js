document.addEventListener('DOMContentLoaded', () => {
    // Function to create balloons
    function createBalloons() {
        const balloonContainer = document.querySelector('.balloons');
        if (balloonContainer) {
            for (let i = 0; i < 20; i++) {
                const balloon = document.createElement('div');
                balloon.classList.add('balloon');
                balloon.style.left = `${Math.random() * 100}vw`;
                balloon.style.animationDelay = `${Math.random() * 5}s`;
                balloonContainer.appendChild(balloon);
            }
        }
    }

    // Function to display memories
    function displayMemories() {
        const memoriesContainer = document.querySelector('.memories');
        if (memoriesContainer) {
            const memories = [
    
                "Thanks for teaching our how to ride a bicycle!",
                "Thanks for helping with our studies",
                "You always make our life easier"
                
            ];
            memories.forEach(memory => {
                const memoryElement = document.createElement('div');
                memoryElement.classList.add('memory');
                memoryElement.textContent = memory;
                memoriesContainer.appendChild(memoryElement);
            });
        }
    }

    function displayMemories1() {
        const memoriesContainer = document.querySelector('.memories1');
        if (memoriesContainer) {
            const memories1 = [
                "You have been a constant source of strength, ",
                "guidance, and unwavering support, and for that, I am truly grateful.",
                "Your unwavering dedication to our family has been an inspiration, ",
                "and we strive to embody those same qualities in our own life. ",
                "Grateful for all the wisdom you've shared.",
                "                                        -Sreya & Sneha"
            ];
            memories1.forEach(memory => {
                const memoryElement = document.createElement('div');
                memoryElement.classList.add('memory');
                memoryElement.textContent = memory;
                memoriesContainer.appendChild(memoryElement);
            });
        }
    }

   
    // Call the functions to create balloons and display memories
    createBalloons();
    displayMemories();
    displayMemories1();

    // Event listener for the "Next" button on page1
    const nextButton = document.querySelector('.next-button');
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            const page1 = document.querySelector('.page1');
            const page2 = document.querySelector('.page2');
            if (page1 && page2 && page1.classList.contains('hidden') === false) {
                page1.classList.add('hidden');
                page2.classList.remove('hidden');
            }
        });
    }

    // Event listener for the "Ready to Go" button on page2
    const readyButton = document.querySelector('.ready-button');
    if (readyButton) {
        readyButton.addEventListener('click', () => {
            const page2 = document.querySelector('.page2');
            const page3 = document.querySelector('.page3');
            if (page2 && page3 && page2.classList.contains('hidden') === false) {
                page2.classList.add('hidden');
                page3.classList.remove('hidden');
            }
        });
    }

    

    // Event listener for the gift box on page3
    const giftBox = document.querySelector('.gift-box');

    if (giftBox) {
        giftBox.addEventListener('click', () => {
            const videoElement = document.createElement('video');
            videoElement.src = 'surprise_video.mp4'; // Replace with actual path to your video
            videoElement.controls = true;
            videoElement.autoplay = true;
            videoElement.style.width = '100vw'; // Set the width to 100% of the viewport width
            videoElement.style.height = '100vh'; // Set the height to 100% of the viewport height
            videoElement.style.objectFit = 'contain'; // Maintain aspect ratio and fit the video within the viewport
            const giftBoxContent = document.querySelector('.gift-box-content');
            if (giftBoxContent) {
                giftBoxContent.innerHTML = ''; // Clear existing content
                giftBoxContent.appendChild(videoElement);

                // Optionally, you can add a message on page4 after the video ends
                videoElement.addEventListener('ended', () => {
                    const page3 = document.querySelector('.page3');
                    const page4 = document.querySelector('.page4');
                    if (page3 && page4 && page3.classList.contains('hidden') === false) {
                        page3.classList.add('hidden');
                        page4.classList.remove('hidden');
                    }
                });
            }
        });
    }
});
