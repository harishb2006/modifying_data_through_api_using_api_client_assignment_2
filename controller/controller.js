

const menuItem =require("../model/model.js");
const create = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !description || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const item = new menuItem({ name, description, price });
        await item.save();
        res.json(item);
    } catch (error) {
        console.error("Error creating item:", error);  
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const   fetch= async(req,res)=>{
    
        const item = await menuItem.find({});
        res.json(item);
}
const update=async (req,res)=>{
   try{
    const id=req.params.id;
    const item=await menuItem.findOne({_id: id});
    if (!item){
        return res.status(404).json({message:"user not found"})
    }
    const updateMenuItem =await menuItem.findByIdAndUpdate(id , req.body, {new: true}
    )
    res.status(201).json({message:"updated menu"})
   } catch (error){
    res.status(500).json({error: "Internal server error"})
   }

}
    
const Delete =async (req,res)=>{
    try{
        const id=req.params.id;
        const item=await menuItem.findOne({_id: id});
    if (!item){
        return res.status(404).json({message:"user not found"})
    }    
    await menuItem.findByIdAndDelete(id);
    res.status(201).json({message: "menu item deleted successfully"})
    } catch (err) {
        res.status(500).json({err:" internal server error"})
    }
}


module.exports={create,fetch,update,Delete}