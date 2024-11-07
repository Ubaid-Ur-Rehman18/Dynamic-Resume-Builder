// Get reference to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement


//Handle form submission
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault();// prevent page relode

    // collect input values
    const name =(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const Phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const Skills=(document.getElementById('Skills') as HTMLInputElement).value
    
    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${Phone}</p>


    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experince</h3>
    <p>${experience}</p>

     <h3>Skills</h3>
    <p>${Skills}</p>
`;

//Display the genrated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML =resumeHTML;
    }else {
        console.error('The resume display element is missing');
        }

    

})
