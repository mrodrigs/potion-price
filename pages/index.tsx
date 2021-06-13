import { Container, Card, TitleWrapper, Title } from '../styles/pages/Home';
import { Button, InputNumber, Table } from 'antd';
import { useState } from 'react';

interface TableItem {
  key: string;
  potion: string;
  npc: number;
  coin: number;
  worth: string;
}

const Home = () => {
  const [coin, setCoin] = useState<number>();
  const [data, setData] = useState<TableItem[]>();

  const columns = [
    {
      title: 'Potion',
      dataIndex: 'potion',
      key: 'potion',
    },
    {
      title: 'Preço NPC',
      dataIndex: 'npc',
      key: 'npc',
    },
    {
      title: 'Preço em Coin',
      dataIndex: 'coin',
      key: 'coin',
    },
    {
      title: 'Compensa em',
      dataIndex: 'worth',
      key: 'worth',
    },
  ];

  const handleCoinValue = (value: number) => {
    setCoin(value);
  }

  const handleCalc = () => {
    if (coin && coin > 0) {
      const strong = 93;
      const greatMana = 144;
      const ultimateMana = 438;

      const strongCoin = (9 * coin) / 1000;
      const greatManaCoin = (14 * coin) / 1000;
      const ultimateManaCoin = (42 * coin) / 1000;

      setData([
        {
          key: '1',
          potion: 'Strong Mana',
          npc: strong,
          coin: strongCoin,
          worth: strong > strongCoin ? 'Coin' : 'NPC',
        },
        {
          key: '2',
          potion: 'Great Mana',
          npc: greatMana,
          coin: greatManaCoin,
          worth: greatMana > greatManaCoin ? 'Coin' : 'NPC',
        },
        {
          key: '3',
          potion: 'Ultimate Mana',
          npc: ultimateMana,
          coin: ultimateManaCoin,
          worth: ultimateMana > ultimateManaCoin ? 'Coin' : 'NPC',
        },
      ]);
    }
  }

  return (
    <Container>
      <Card>
        <Title>Preço da Tibia Coin</Title>
        <TitleWrapper>
          <InputNumber min={0} onChange={value => handleCoinValue(value)} />
          <Button type="primary" onClick={handleCalc}>Calcular</Button>
        </TitleWrapper>
        <Table dataSource={data} columns={columns} />
      </Card>
    </Container>
  )
};

export default Home;
