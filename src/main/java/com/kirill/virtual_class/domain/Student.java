package com.kirill.virtual_class.domain;

public class Student {
    //id   uuid
    //redis
    //front
    private int uuid;
    private MessageType type;
    private String name;
    private Boolean handUp;

    public int getUuid() {
        return uuid;
    }

    public void setUuid(int uuid) {
        this.uuid = uuid;
    }

    public enum MessageType {
        HAND_UP_DOWN,
        JOIN,
        LEAVE
    }

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
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
