import axios from 'axios';
import PeopleService from '@/pages/step20/services/PeopleService.js';

jest.mock('axios');
const users = [{ name: 'Bob', id: 1 }];

describe('PeopleService', () => {
  afterEach(() => {
    axios.get.mockReset();
    axios.put.mockReset();
    axios.post.mockReset();
    axios.delete.mockReset();
  });

  describe('fetch', () => {
    it('should fetch the base API', async () => {
      axios.get.mockResolvedValue({ data: users })
      const res = await PeopleService.fetch();

      expect(res).toEqual(users);
      expect(axios.get).toHaveBeenCalledWith('http://localhost:9000/api/peoples');
    });
  });

  describe('fetchRandom', () => {
    it('should fetch a random person', async () => {
      axios.get.mockResolvedValue({ data: users[0] });
      const res = await PeopleService.fetchRandom();

      expect(res).toEqual(users[0]);
      expect(axios.get).toHaveBeenCalledWith('http://localhost:9000/api/peoples/random');
    });
  });

  describe('delete', () => {
    it('should delete a person from its id', async () => {
      axios.delete.mockResolvedValue({ data: {} });
      const res = await PeopleService.delete(1);

      expect(res).toEqual({});
      expect(axios.delete).toHaveBeenCalledWith('http://localhost:9000/api/peoples/1');
    });
  });

  describe('create', () => {
    it('should create a person passed as parameter', async () => {
      const person = { name: 'John' };
      axios.post.mockResolvedValue({ data: { ...person, id: 2 }});
      const res = await PeopleService.create(person);

      expect(res).toEqual({ ...person, id: 2 });
      expect(axios.post).toHaveBeenCalledWith('http://localhost:9000/api/peoples', person);
    });
  });

  describe('update', () => {
    it('should update a person with data passed as parameter', async () => {
      const person = { age: 26, id: 1 };
      axios.put.mockResolvedValue({ data: { ...users[0], ...person }});
      const res = await PeopleService.update(person);

      expect(res).toEqual({ ...users[0], ...person });
      expect(axios.put).toHaveBeenCalledWith('http://localhost:9000/api/peoples/1', person);
    });
  });

  describe('fetchOne', () => {
    it('should fetch the person from its id passed as parameter', async () => {
      axios.get.mockResolvedValue({ data: users[0] });
      const res = await PeopleService.fetchOne(1);

      expect(res).toEqual(users[0]);
      expect(axios.get).toHaveBeenCalledWith('http://localhost:9000/api/peoples/1');
    });
  });
});