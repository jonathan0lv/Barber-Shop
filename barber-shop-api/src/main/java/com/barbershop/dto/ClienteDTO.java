package com.barbershop.dto;

import lombok.Data;

@Data
public class ClienteDTO {
    private Long id;
    private String nome;
    private String telefone;
    private String email;
}
