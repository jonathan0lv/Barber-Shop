package com.barbershop.repository;

import com.barbershop.model.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    List<Agendamento> findByData(String data);
    List<Agendamento> findByClienteId(Long clienteId);
}
