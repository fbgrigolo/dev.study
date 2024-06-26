namespace generics
{
    public class printService<T>
    {
        private T[] _values;
        private int _count = 0;

        public printService(int length)
        {
            _values = new T[length];
        }


        public void addValue(T value)
        {
            _values[_count] = value;
            _count++;
        }

        public T first()
        {
            if (_values.Length == 0) {
                throw new InvalidOperationException("PrintService is empty");
            }
            return _values[0];
        }

        public void print()
        {
            Console.Write("[");

            for (int i = 0; i < _values.Length; i++)
            {
                if (i == _values.Length - 1)
                {
                    Console.Write(_values[i]);
                }
                else
                {
                    Console.Write(_values[i] + ", ");
                }
            }

            Console.WriteLine("]");
        }
    }
}
