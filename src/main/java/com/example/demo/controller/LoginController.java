package com.example.demo.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {

	@RequestMapping({"/","index"})
	public String indexPage() {
		return "index";
	}
	
	@RequestMapping(method = RequestMethod.POST,value = "/checkLogin")
	@ResponseBody
	public boolean checkLogin(@RequestParam Map<String, Object> requestJson) {
		System.out.println("inside check login method");
		String username=(String)requestJson.get("password");
		String password=(String)requestJson.get("username");
		for (Map.Entry<String, Object> entry : requestJson.entrySet()) {
			String key = entry.getKey();
			Object val = entry.getValue();
			System.out.println("key"+ key +" value"+val);
		}
		System.out.println("inside check login method"+username+" "+password);
		
		return true;
	}
	
	
}
