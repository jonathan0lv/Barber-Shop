package com.barbershop.controller;

import com.barbershop.model.Agendamento;
import com.barbershop.model.Cliente;
import com.barbershop.repository.AgendamentoRepository;
import com.barbershop.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/agendamentos")
@CrossOrigin(origins = "*")
public class AgendamentoController {

    @Autowired
    private AgendamentoRepository repository;

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Agendamento> listarAgendamentos() {
        return repository.findAll();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> criarAgendamento(@RequestBody Agendamento agendamento) {
        System.out.println("Recebido agendamento: " + agendamento);

        if (agendamento.getCliente() == null || agendamento.getCliente().getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro: Cliente não pode ser nulo.");
        }

        Optional<Cliente> clienteExistente = clienteRepository.findById(agendamento.getCliente().getId());
        if (clienteExistente.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Erro: Cliente não encontrado.");
        }

        agendamento.setCliente(clienteExistente.get());

        try {
            Agendamento novoAgendamento = repository.save(agendamento);
            return ResponseEntity.status(HttpStatus.CREATED).body(novoAgendamento);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar o agendamento: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarAgendamento(@PathVariable Long id) {
        Optional<Agendamento> agendamentoOpt = repository.findById(id);
        if (agendamentoOpt.isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.ok("Agendamento excluído com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Erro: Agendamento não encontrado.");
        }
    }
}
