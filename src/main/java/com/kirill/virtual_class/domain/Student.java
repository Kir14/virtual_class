package com.kirill.virtual_class.domain;

public class Student {
    private Long id;
    private String name;
    private Boolean handUp;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getHandUp() {
        return handUp;
    }

    public void setHandUp(Boolean handUp) {
        this.handUp = handUp;
    }

    public Boolean isHandUp() {
        return handUp;
    }
}
