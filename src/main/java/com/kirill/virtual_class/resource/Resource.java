package com.kirill.virtual_class.resource;

import com.kirill.virtual_class.domain.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

public interface Resource<T> {

    @GetMapping
    ResponseEntity<Collection<T>> All();

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    ResponseEntity<T> Add(@RequestBody T t);



    @DeleteMapping("{id}")
    ResponseEntity<T> DeleteById(@PathVariable Long id);

}
