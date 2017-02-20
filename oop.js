



function NewPerson(name)
{	
	
	this.name=name,
	this.sayName= function()
		{
		console.log(name)
		}
	

	

}

var Todd = new NewPerson('Todd')
Todd.sayName();