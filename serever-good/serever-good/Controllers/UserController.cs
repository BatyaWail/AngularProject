﻿using Microsoft.AspNetCore.Mvc;
using serever_good.models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serever_good.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public UserController(DataContext context)
        {
            _dataContext = context;
        }
        // GET: api/<UserController>
        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            return Ok( _dataContext.UserList.ToList() );
        }

        // GET api/<UserController>/5
        [HttpGet("{name}")]
        public ActionResult<User> Get(string name)
        {
            return Ok(_dataContext.UserList.ToList().Find(x => x.Name == name));
        }
      

        [HttpPost]
        public ActionResult<User> Post([FromBody] User user)
        {
            _dataContext.UserList.Add(user);
            _dataContext.SaveChanges();
            return Ok(user);
        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string name, [FromBody] User user)
        {
            int x = _dataContext.UserList.ToList().FindIndex(x => x.Name == name);
            _dataContext.UserList.ToList()[x] = user;
            _dataContext.SaveChanges();
            return Ok();
        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public ActionResult<User> Delete(string id)
        {
            User user = _dataContext.UserList.ToList().FindAll(x => x.Name == id).First();
            _dataContext.UserList.Remove(user);
            _dataContext.SaveChanges();
            return Ok(user);
        }
    }
}
