import { Card, Container, Row, Text, Button, Spacer } from '@nextui-org/react';
import Link from 'next/link';

interface PageProps {
  children: React.ReactNode;
}

const Layout = ({ children }: PageProps) => {
  return (
    <>
      <Container css={{ p: 10 }}>
        <Card css={{ $$cardColor: '$colors$success' }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Link href="/">
                <a>
                  <Button size="lg" shadow color="primary">
                    HOME
                  </Button>
                </a>
              </Link>
              <Spacer x={0.5} />
              <Link href="/create">
                <a>
                  <Button size="lg" shadow color="primary">
                    Create
                  </Button>
                </a>
              </Link>
              <Spacer x={0.5} />
              <Link href="/counter">
                <a>
                  <Button size="lg" shadow color="primary">
                    COUNTER
                  </Button>
                </a>
              </Link>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      {children}
    </>
  );
};

export default Layout;
