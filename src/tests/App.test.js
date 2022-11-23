import React from 'react';
import {render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import data from './data';

describe('Star wars test', () => {
  it('Testa Category filter diameter', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />);
    const categories = screen.getByTestId("column-filter")
    const filterButton = screen.getByTestId('button-filter')
    userEvent.selectOptions(categories, ['diameter'])
    expect(categories).toBeInTheDocument()
    userEvent.click(filterButton)
    const Terrain = await screen.findByText('Terrain')
    expect(Terrain).toBeInTheDocument()
  })
  it('testa number input', () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />);
    const numberButton = screen.getByTestId('value-filter')
    userEvent.type(numberButton, '5')
    expect(numberButton.value).toBe('05')
  })
  it('Testa inputs na tela', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectColumn = screen.getByTestId('column-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');
    expect(selectColumn).toBeDefined();
    expect(inputComparison).toBeDefined();
    expect(valueFilter).toBeDefined();
    expect(btnFilter).toBeDefined();
    userEvent.selectOptions(selectColumn, ['orbital_period']);
    userEvent.selectOptions(inputComparison, ['menor que']);
    userEvent.type(valueFilter, '400');
    userEvent.click(btnFilter);
    expect( await screen.findByRole('cell', {  name: /dagobah/i})).toBeDefined();
  });
  it('testa name Filter', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const inputName = screen.getByTestId('name-filter');
    expect(inputName).toBeDefined();
    userEvent.type(inputName, 'oo');
    expect( await screen.findByRole('cell', {  name: /grassy hills, swamps, forests, mountains/i})).toBeDefined();
  })
  it('testa rotation maior que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectColumn = screen.getByTestId('column-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    userEvent.selectOptions(selectColumn, ['rotation_period']);
    userEvent.selectOptions(inputComparison, ['maior que']);
    userEvent.type(valueFilter, '26');
    userEvent.click(btnFilter)
    expect( await screen.findByRole('cell', {  name: /ocean/i})).toBeDefined();
  })
  it('testa population maior que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectColumn = screen.getByTestId('column-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    userEvent.selectOptions(selectColumn, ['population']);
    userEvent.selectOptions(inputComparison, ['menor que']);
    userEvent.type(valueFilter, '1001');
    userEvent.click(btnFilter)
    expect( await screen.findByRole('cell', {  name: /jungle, rainforests/i})).toBeDefined();
  })
  it('testa rotation menor que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectColumn = screen.getByTestId('column-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    userEvent.selectOptions(selectColumn, ['rotation_period']);
    userEvent.selectOptions(inputComparison, ['menor que']);
    userEvent.type(valueFilter, '13');
    userEvent.click(btnFilter)
    expect( await screen.findByRole('cell', {  name: /gas giant/i})).toBeDefined();
  })
  it('testa orbital menor que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectColumn = screen.getByTestId('column-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    userEvent.selectOptions(selectColumn, ['orbital_period']);
    userEvent.selectOptions(inputComparison, ['menor que']);
    userEvent.type(valueFilter, '305');
    userEvent.click(btnFilter)
    expect( await screen.findByRole('cell', {  name: /desert/i})).toBeDefined();
  })
  it('testa diameter menor que', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectColumn = screen.getByTestId('column-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    userEvent.selectOptions(selectColumn, ['diameter']);
    userEvent.selectOptions(inputComparison, ['menor que']);
    userEvent.type(valueFilter, '5000');
    userEvent.click(btnFilter)
    expect( await screen.findByRole('cell', {  name: /forests, mountains, lakes/i})).toBeDefined();
  })
  it('testa surface igual a', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectColumn = screen.getByTestId('column-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    userEvent.selectOptions(selectColumn, ['surface_water']);
    userEvent.selectOptions(inputComparison, ['igual a']);
    userEvent.type(valueFilter, '40');
    userEvent.click(btnFilter)
    expect( await screen.findByRole('cell', {  name: /grasslands, mountains/i})).toBeDefined();
  })
  it('testa population igual a', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectColumn = screen.getByTestId('column-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    userEvent.selectOptions(selectColumn, ['population']);
    userEvent.selectOptions(inputComparison, ['igual a']);
    userEvent.type(valueFilter, '1000');
    userEvent.click(btnFilter)
    expect( await screen.findByRole('cell', {  name: /jungle, rainforests/i})).toBeDefined();
  })
  it('testa trocar order', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectSort = screen.getByTestId("column-sort");
    const btnOrder = screen.getByTestId("column-sort-button");
    userEvent.selectOptions(selectSort, ['surface_water']);
    userEvent.click(btnOrder);
  })
  it('testa trocar ordem para decrescente', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const selectSort = screen.getByTestId("column-sort");
    const decrescenteBtn = screen.getByTestId("column-sort-input-desc");
    const btnOrder = screen.getByTestId("column-sort-button");
    userEvent.selectOptions(selectSort, ['population']);
    userEvent.click(decrescenteBtn)
    console.log(decrescenteBtn);
    userEvent.click(btnOrder);
    expect( await screen.findAllByRole('cell', {  name: /unknown/i})).toBeDefined();
  })
  it('testa deletar filtros', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const btnFilter = screen.getByTestId('button-filter');
    const deleteFiltersBtn = screen.getByTestId('button-remove-filters')
    userEvent.click(btnFilter)
    const populationFilter = screen.getByText('Delete Filter')
    userEvent.click(populationFilter)
    userEvent.click(btnFilter)
    userEvent.click(btnFilter)
    userEvent.click(deleteFiltersBtn)
  })
  it('testa undefined', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    })
    render(<App />)
    const btnFilter = screen.getByTestId('button-filter');
    userEvent.click(btnFilter);
    userEvent.click(btnFilter);
    userEvent.click(btnFilter);
    userEvent.click(btnFilter);
    userEvent.click(btnFilter);
    userEvent.click(btnFilter);
  })
})