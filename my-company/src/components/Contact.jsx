import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{padding: '20px', display: "flex", flexDirection: "column", height: "50vh", width:"100%"}}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0', padding:"5px",  width:"50%"}}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0',padding:"5px", width:"50%" }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0', padding:"5px", width:"50%"}}
           />
           <button type="submit" style={{padding:"10px", backgroundColor:"#9e2323ff", color:"#fff", border:"none", borderRadius:"20px", cursor: "pointer"}}>Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact