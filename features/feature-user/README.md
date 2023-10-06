# User Feature Package

This package provides a User Widget component and a service for fetching user data. The User Widget is a React component that displays user information. The service fetches user data and provides mock data for testing.

## Installation

To install this package, run the following command in your terminal:

```bash
npm install user-feature-package
```

## Usage

To use the User Widget component in your application, import it as follows:

```javascript
import { UserWidget } from 'user-feature-package';
```

You can then use it in your JSX like any other component:

```jsx
<UserWidget />
```

To use the `getUserData` service, import it as follows:

```javascript
import { getUserData } from 'user-feature-package';
```

You can then call this function to fetch user data:

```javascript
const userData = getUserData();
```

## Testing

This package uses Jest for testing. To run the tests, use the following command:

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)