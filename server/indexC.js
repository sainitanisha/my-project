const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
const app=express();
app.use(cors());

app.use(express.json());
async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/company');
        console.log("mongo db connected");
    }catch(error){
        console.log("error occured");
        process.exit(1);
    }
}

connectDB();

const employeeSchema=new mongoose.Schema(
    {
        empNo:{type:Number,required:true },
        empName:{type:String,required:true ,unique:true},
        empSal:{type:Number,required:true },
    },{
        timestamps:false,
        versionKey:false
    }
)
const Employee = mongoose.model('Employee',employeeSchema);
//create new employee

app.post('/api/employees',async(req,res)=>{
    try{

    const employee=new Employee(req.body);
    const savedEmployee=await employee.save();
    // res.status(201).json(savedEmployee);
    res.status(201).json({message:'employee added sucessfully'});
    }catch(error){
        res.status(400).json({message:error.message});
    }
});
// get all employes
app.get('/api/employees',async(req,res)=>{

    try{

    
    const employees= await Employee.find();
    res.json(employees);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});
//get employee by id

app.get('/api/employees/:id', async (req, res) => {
    try 
    {
        const employee = await Employee.findById(req.params.id);
        if (!employee) 
            return res.status(404).json({ message: 'Employee not found' });
        
        res.json(employee);
    } 
    catch (error)
    {
        res.status(500).json({ message: error.message });
    }
});


//delete employee by id
app.delete('/api/employees/:id',async (req,res) =>{
    try{
    const deletedemployee= await Employee.findByIdAndDelete(req.params.id);
   if(!deletedemployee)
    return res.status(404).json({message:'employee not found'});
res.json({message:'employee deleted sucessfully'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
});
//update employees by id

// Update employee by ID
app.put('/api/employees/:id', async (req, res) => {
     try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
                req.params.id,
                req.body,{ 
                new: true,  
                runValidators: true
            });
    if (!updatedEmployee) 
        return res.status(404).json({ message: 'Employee not found' });
        //res.json(updatedEmployee);
        res.json({ message: 'Employee Updated successfully' });
    } 
    catch (error){
        res.status(400).json({ message: error.message });
    }
});

app.listen(3001,()=>{
    console.log("server is started on http://localhost:3001");

});


