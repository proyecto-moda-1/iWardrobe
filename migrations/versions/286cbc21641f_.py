"""empty message

Revision ID: 286cbc21641f
Revises: 7c922c224aca
Create Date: 2021-06-20 00:03:08.028129

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '286cbc21641f'
down_revision = '7c922c224aca'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('repeat_password', sa.String(length=120), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'repeat_password')
    # ### end Alembic commands ###