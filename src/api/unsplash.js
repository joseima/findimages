import axios from 'axios';

export default axios.create ({
	baseURL: 'https://api.unsplash.com',
	headers:  {
		Authorization: 'Client-ID 062cdc65c36518432799104638ab3a1af6009d91e7b599b3e7c52906c3db2f70'
	}

});